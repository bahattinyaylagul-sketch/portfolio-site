const fs = require('fs');
const path = require('path');

const data = {
  // Core Pages
  "src/app/page.tsx": {
    title: "SEO Danışmanlığı ve GEO Stratejileri | Bahattin Yaylagül",
    description: "Yapay zeka odaklı GEO (Generative Engine Optimization) ve ileri seviye teknik SEO danışmanlığı ile markanızı geleceğin aramalarına hazırlayın."
  },
  "src/app/hakkimda/page.tsx": {
    title: "Hakkımda | Bahattin Yaylagül - SEO & GEO Danışmanı",
    description: "10 yılı aşkın süredir SEO ve teknik danışmanlık hizmeti veriyorum. Markanızı Google ve yapay zeka arama motorlarında organik olarak büyütüyorum."
  },
  "src/app/referanslar/page.tsx": {
    title: "Referanslar ve Vaka Analizleri | Bahattin Yaylagül",
    description: "Birlikte çalıştığım markalar, başarı hikayeleri ve organik trafiği nasıl ölçeklendirdiğimize dair detaylı SEO/GEO vaka analizlerini inceleyin."
  },
  "src/app/seo/page.tsx": {
    title: "Kapsamlı SEO Danışmanlığı | E-Ticaret ve Kurumsal SEO",
    description: "Sürdürülebilir organik büyüme için teknik altyapı, içerik mimarisi ve otorite inşasını kapsayan 360 derece kurumsal SEO danışmanlık hizmetleri."
  },
  "src/app/seo/teknik-seo/page.tsx": {
    title: "Teknik SEO Danışmanlığı: Core Web Vitals ve Tarama",
    description: "Googlebot ve AI botlarının sitenizi eksiksiz taraması için JavaScript SEO, Core Web Vitals ve sunucu optimizasyonu içeren teknik danışmanlık."
  },
  "src/app/site-haritasi/page.tsx": {
    title: "Site Haritası | Bahattin Yaylagül İçerik Dizini",
    description: "Sitede yer alan tüm GEO rehberleri, SEO makaleleri ve danışmanlık hizmeti detaylarına site haritası üzerinden kolayca ulaşın."
  },
  
  // GEO Guides
  "src/app/geo/ai-botlari-robots-txt/page.tsx": {
    title: "AI Botları ve Robots.txt Yönetimi: Tarama İzinleri",
    description: "GPTBot ve ClaudeBot gibi yapay zeka tarayıcılarına robots.txt üzerinden nasıl erişim izni vereceğinizi veya kısıtlayacağınızı detaylı öğrenin."
  },
  "src/app/geo/ai-marka-mention-etkisi/page.tsx": {
    title: "Marka Mention'ları ve AI Hafızası (Co-occurrence)",
    description: "LLM modellerinde markanızın nasıl kodlandığını (bağlamsal birliktelik) ve bağlantısız anılmaların (brand mention) GEO görünürlüğüne etkisini keşfedin."
  },
  "src/app/geo/ai-overviews-nedir/page.tsx": {
    title: "Google AI Overviews (AI Bakışı) Nedir? Optimizasyon Rehberi",
    description: "Google'ın AI Bakışı özelliğinde sitenizin nasıl yer alabileceğini, organik trafiğe etkilerini ve optimizasyon (AIO) tekniklerini inceleyin."
  },
  "src/app/geo/bing-copilot-geo/page.tsx": {
    title: "Bing Copilot GEO Stratejisi: Arama ve AI Entegrasyonu",
    description: "Bing'in Copilot (GPT-4) sohbet arayüzünde markanızın güvenilir kaynak olarak gösterilmesi için gerekli teknik ve içerik optimizasyonları."
  },
  "src/app/geo/chatgpt-geo/page.tsx": {
    title: "ChatGPT GEO: SearchGPT'de Kaynak Gösterilme Rehberi",
    description: "ChatGPT'nin arama özelliklerinde (SearchGPT) öne çıkmak ve modelin yanıtlarında markanıza atıf yapılmasını sağlamak için taktikler."
  },
  "src/app/geo/dijital-pr-ai-atif/page.tsx": {
    title: "Dijital PR ile AI Alıntı Oranını (Atıf) Artırmak",
    description: "Üçüncü taraf liste içerikleri ve dijital PR kampanyalarıyla yapay zeka arama motorlarındaki marka referanslarınızı nasıl maksimize edersiniz?"
  },
  "src/app/geo/entity-seo/page.tsx": {
    title: "Entity SEO: Varlık Tabanlı Optimizasyon ve Bilgi Grafiği",
    description: "Google ve yapay zeka modelleri için anahtar kelime yerine varlık (entity) temelli içerik inşa ederek algoritmik güven (E-E-A-T) oluşturun."
  },
  "src/app/geo/ga4-ai-trafigi/page.tsx": {
    title: "GA4'te Yapay Zeka (AI) Trafiği Nasıl Ölçülür?",
    description: "Google Analytics 4 kullanarak Perplexity, ChatGPT ve Copilot'tan gelen yönlendirme trafiklerini ayrıştırma ve GEO performansını ölçme rehberi."
  },
  "src/app/geo/gemini-geo/page.tsx": {
    title: "Google Gemini GEO Optimizasyonu: Yanıtlarda Öne Çıkın",
    description: "Google'ın Gemini AI modellerinde (Workspace ve arama) markanızın doğru bağlamda ve yetkin bir kaynak olarak gösterilmesi için en iyi pratikler."
  },
  "src/app/geo/geo-kpi-olcumu/page.tsx": {
    title: "GEO KPI Belirleme: Cevap Payı ve Görünürlük Ölçümü",
    description: "Generative Engine Optimization (GEO) stratejinizin başarısını ölçmek için Share of Answer (Cevap Payı) ve model duyarlılığı metriklerini kullanın."
  },
  "src/app/geo/geo-seo-aeo-farki/page.tsx": {
    title: "SEO, GEO ve AEO Farkları: Doğru Terimi Seçmek",
    description: "Arama Motoru Optimizasyonu (SEO) ile Yapay Zeka Cevap Optimizasyonu (AEO ve GEO) arasındaki mekanik farkları ve uygulama senaryolarını öğrenin."
  },
  "src/app/geo/google-ai-modu/page.tsx": {
    title: "Google AI Modu Optimizasyonu: İlk 3 Kaynak Arasına Girmek",
    description: "Google AI arama modunda yanıt kutusu içindeki referans linklerden biri olmak için içerik parçalama (chunking) ve intent uyumu stratejileri."
  },
  "src/app/geo/icerik-chunking/page.tsx": {
    title: "İçerik Chunking (Bölümleme): Yapay Zeka İçin Semantik Yapı",
    description: "Büyük dil modellerinin içeriğinizi eksiksiz anlaması ve Retrieval-Augmented Generation (RAG) sistemlerinde kullanması için chunking (parçalama) teknikleri."
  },
  "src/app/geo/javascript-ssr-ai-botlari/page.tsx": {
    title: "JavaScript (CSR/SSR) Sitelerde AI Bot Erişilebilirliği",
    description: "Client-side rendering kullanan (React/Vue) web sitelerinde ChatGPT ve Claude tarayıcılarının içerik okuma sorunları ve Server-Side çözümler."
  },
  "src/app/geo/llms-txt-nedir/page.tsx": {
    title: "llms.txt Dosyası Nedir? Yapay Zeka Botları İçin Site Haritası",
    description: "Web sitenize /llms.txt ekleyerek büyük dil modellerine okunabilir bir özet sunmanın yolları, avantajları ve standart Markdown kullanımı."
  },
  "src/app/geo/mcp-nlweb/page.tsx": {
    title: "MCP ve NLWeb: Model Context Protocol ile Web Entegrasyonu",
    description: "Anthropic'in MCP (Model Context Protocol) mimarisi ve NLWeb protokolünün yapay zeka aracılarının internet ile etkileşimini nasıl dönüştürdüğünü inceleyin."
  },
  "src/app/geo/perplexity-geo/page.tsx": {
    title: "Perplexity GEO: Yanıt Motorunda (Answer Engine) Görünürlük",
    description: "Araştırma odaklı yapay zeka arama motoru Perplexity'de alıntı ve dipnot olarak gösterilme (citation) olasılığını artıracak içerik yöntemleri."
  },
  "src/app/geo/prompt-arastirmasi/page.tsx": {
    title: "Prompt (İstem) Araştırması: Kullanıcıların AI Sorgu Dili",
    description: "Anahtar kelime araştırmasının yerini alan prompt araştırması ile kullanıcıların yapay zeka sohbet botlarına sorduğu kompleks soruları keşfedin."
  },
  "src/app/geo/query-fan-out/page.tsx": {
    title: "Query Fan-Out (Sorgu Çoğaltma) Nedir? Arama Niyeti Dağılımı",
    description: "Google AI'ın kullanıcının tek bir sorgusunu arka planda birden çok alt sorguya bölerek (Query Fan-Out) nasıl daha derinlemesine sonuç ürettiğini anlayın."
  },
  "src/app/geo/reddit-forum-mention-etkisi/page.tsx": {
    title: "Reddit ve Forum Yorumlarının AI Görünürlüğüne (GEO) Etkisi",
    description: "Kullanıcı üretimi içeriklerin (UGC) ve forumlardaki marka bahsetmelerinin yapay zeka modelleri eğitimindeki otorite (E-E-A-T) sinyalleri."
  },
  "src/app/geo/wikidata-bilgi-paneli/page.tsx": {
    title: "Wikidata Varlık Kaydı ve Bilgi Paneli Optimizasyonu",
    description: "Markanızı Wikidata'da (Knowledge Graph) tanımlayarak Google Bilgi Paneli (Knowledge Panel) kazanma ve LLM güvenilirliği oluşturma adımları."
  },
  "src/app/geo/yapay-zeka-arama-nasil-calisir/page.tsx": {
    title: "Yapay Zeka Araması Nasıl Çalışır? RAG ve Grounding Sistemi",
    description: "Retrieval-Augmented Generation (RAG) mimarisinin büyük dil modellerindeki halüsinasyonları nasıl azalttığını ve kaynaklandırmayı (grounding) nasıl yaptığını öğrenin."
  },
  "src/app/geo/zero-click-arama/page.tsx": {
    title: "Zero-Click (Sıfır Tıklamalı) Aramalar ve Web Trafiğinin Geleceği",
    description: "Kullanıcıların siteye girmeden AI özetleriyle yanıt aldığı sıfır tıklamalı arama trendinde markaların uygulayabileceği trafiği koruma stratejileri."
  }
};

Object.keys(data).forEach(file => {
  const fullPath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const { title, description } = data[file];
  
  let modified = false;
  
  if (content.includes('export const metadata')) {
    content = content.replace(/^(\s*)title:\s*["'].*?["'],?.*$/m, "$1title: \"" + title + "\",");
    content = content.replace(/^(\s*)description:\s*["'].*?["'],?.*$/m, "$1description: \"" + description + "\",");
    modified = true;
  } else {
    const importRegex = /import .*?;?\n/g;
    let lastImportIndex = 0;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportIndex = match.index + match[0].length;
    }
    
    if (lastImportIndex === 0) {
      const firstLineMatch = content.match(/^('use client'|"use client");?\n/);
      if (firstLineMatch) {
         lastImportIndex = firstLineMatch[0].length;
      }
    }
    
    let metadataStr = "\nexport const metadata: Metadata = {\n    title: \"" + title + "\",\n    description: \"" + description + "\"\n};\n\n";
    
    if (!content.includes('Metadata')) {
       metadataStr = "\nimport { Metadata } from \"next\";" + metadataStr;
    }

    content = content.slice(0, lastImportIndex) + metadataStr + content.slice(lastImportIndex);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(fullPath, content);
    console.log("Updated: " + file);
  }
});
