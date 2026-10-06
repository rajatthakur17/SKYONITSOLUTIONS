async function runAudit() {
  const res = await fetch('http://localhost:4321/');
  const html = await res.text();
  console.log('--- SEO AUDIT RESULTS FOR HOMEPAGE ---');
  console.log('HTML Length:', html.length, 'bytes');

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'NONE';
  console.log(`\n1. <title> Tag: "${title}" (${title.length} chars)`);
  if (title.length < 30) console.warn('   ⚠️  Title might be too short (<30 chars)');
  else if (title.length > 60) console.warn('   ⚠️  Title might be truncated on mobile SERPs (>60 chars)');
  else console.log('   ✅ Optimal title length (30-60 chars)');

  // Meta Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : 'NONE';
  console.log(`\n2. Meta Description: "${desc}" (${desc.length} chars)`);
  if (desc.length < 70) console.warn('   ⚠️  Description is quite short (<70 chars)');
  else if (desc.length > 165) console.warn('   ⚠️  Description is slightly long (>165 chars, max recommended is ~160)');
  else console.log('   ✅ Optimal meta description length (70-165 chars)');

  // Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  console.log(`\n3. Canonical Link: ${canonicalMatch ? canonicalMatch[1] : '❌ MISSING'}`);

  // Robots
  const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  console.log(`\n4. Robots Meta: ${robotsMatch ? robotsMatch[1] : '❌ MISSING'}`);

  // Headings
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  console.log(`\n5. Headings Structure:`);
  console.log(`   H1 Count: ${h1Matches.length} ${h1Matches.length === 1 ? '✅ (Single H1)' : '❌ (Should be exactly 1 H1)'}`);
  h1Matches.forEach((h, i) => console.log(`     H1 [${i + 1}]: "${h}"`));

  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  console.log(`   H2 Count: ${h2Matches.length}`);
  h2Matches.forEach((h, i) => console.log(`     H2 [${i + 1}]: "${h}"`));

  // Open Graph & Twitter Cards
  console.log(`\n6. Social Meta Tags:`);
  const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  const ogDesc = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  const ogUrl = html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i);
  const twCard = html.match(/<meta\s+property=["']twitter:card["']\s+content=["']([^"']*)["']/i);
  const twImage = html.match(/<meta\s+property=["']twitter:image["']\s+content=["']([^"']*)["']/i);

  console.log(`   og:title: ${ogTitle ? ogTitle[1] : '❌'}`);
  console.log(`   og:description: ${ogDesc ? 'Present' : '❌'}`);
  console.log(`   og:url: ${ogUrl ? ogUrl[1] : '❌'}`);
  console.log(`   og:image: ${ogImage ? ogImage[1] : '❌'}`);
  console.log(`   twitter:card: ${twCard ? twCard[1] : '❌'}`);
  console.log(`   twitter:image: ${twImage ? twImage[1] : '❌'}`);

  // JSON-LD Schemas
  const jsonLdBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  console.log(`\n7. Structured Data (JSON-LD):`);
  console.log(`   Schemas Found: ${jsonLdBlocks.length}`);
  jsonLdBlocks.forEach((block, idx) => {
    try {
      const data = JSON.parse(block[1]);
      console.log(`   Schema [${idx + 1}]: @type = ${data['@type']} | Name = ${data.name || 'N/A'}`);
    } catch (e) {
      console.log(`   Schema [${idx + 1}]: ❌ JSON Parse Error: ${e.message}`);
    }
  });

  // Images & Alt texts
  const imgMatches = [...html.matchAll(/<img\b([^>]*)>/gi)];
  console.log(`\n8. Image Accessibility & SEO:`);
  console.log(`   Total <img> tags: ${imgMatches.length}`);
  let missingAlt = 0;
  let decorativeAlt = 0;
  let descriptiveAlt = 0;
  imgMatches.forEach((m, idx) => {
    const rawAttrs = m[1];
    const srcMatch = rawAttrs.match(/src=["']([^"']*)["']/i);
    const src = srcMatch ? srcMatch[1] : 'unknown';
    const altRegex = /\balt(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/i;
    const hasAlt = altRegex.test(rawAttrs);
    
    if (!hasAlt) {
      missingAlt++;
      console.log(`   ❌ Missing alt attribute completely: ${src}`);
    } else {
      const match = rawAttrs.match(altRegex);
      const val = (match[1] !== undefined ? match[1] : match[2] !== undefined ? match[2] : match[3] || '').trim();
      if (!val) {
        decorativeAlt++;
        console.log(`   🎨 Decorative image with alt="" (valid for aria-hidden graphics): ${src.slice(0, 70)}...`);
      } else {
        descriptiveAlt++;
        console.log(`   ✅ Descriptive alt: "${val}" (${src.slice(0, 50)}...)`);
      }
    }
  });
  console.log(`   Summary: ${descriptiveAlt} descriptive alt, ${decorativeAlt} decorative (empty alt=""), ${missingAlt} missing alt`);

  // Links
  const links = [...html.matchAll(/<a\s+([^>]+)>/gi)];
  console.log(`\n9. Links:`);
  console.log(`   Total <a> tags: ${links.length}`);
  let missingHref = 0;
  let externalLinksNoRel = 0;
  links.forEach(l => {
    const href = l[1].match(/href=["']([^"']*)["']/i);
    const target = l[1].match(/target=["']([^"']*)["']/i);
    const rel = l[1].match(/rel=["']([^"']*)["']/i);
    if (!href || !href[1]) missingHref++;
    if (target && target[1] === '_blank') {
      if (!rel || !rel[1].includes('noopener')) {
        externalLinksNoRel++;
      }
    }
  });
  console.log(`   Missing hrefs: ${missingHref}`);
  console.log(`   External target="_blank" missing rel="noopener": ${externalLinksNoRel}`);
}

runAudit().catch(console.error);
