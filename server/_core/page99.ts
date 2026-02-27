import { Express, Request, Response } from "express";

/**
 * Hidden landing page - /99.php
 * - Blocks all known bots, crawlers, and scrapers via User-Agent detection
 * - Blocks headless browsers (Puppeteer, Playwright, Selenium, PhantomJS)
 * - Blocks common security scanners and monitoring tools
 * - Only serves real human users
 * - Shows a responsive image that links to WhatsApp
 * - No robots.txt listing, no sitemap entry
 */

// Comprehensive list of bot User-Agent patterns to block
const BOT_PATTERNS = [
  // Search engine bots
  /googlebot/i,
  /bingbot/i,
  /slurp/i,
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /sogou/i,
  /exabot/i,
  /facebot/i,
  /ia_archiver/i,
  /msnbot/i,
  /teoma/i,
  /alexa/i,
  /ask jeeves/i,
  /yahoo/i,
  /aolbuild/i,

  // Social media crawlers
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /slackbot/i,
  /discordbot/i,
  /pinterest/i,
  /tumblr/i,

  // SEO & marketing tools
  /semrushbot/i,
  /ahrefsbot/i,
  /mj12bot/i,
  /dotbot/i,
  /rogerbot/i,
  /screaming frog/i,
  /seokicks/i,
  /serpstatbot/i,
  /sistrix/i,
  /seobilitybot/i,
  /linkdexbot/i,
  /blexbot/i,
  /yeti/i,

  // Headless browsers & automation
  /headlesschrome/i,
  /phantomjs/i,
  /selenium/i,
  /puppeteer/i,
  /playwright/i,
  /webdriver/i,
  /htmlunit/i,
  /zombie/i,
  /slimerjs/i,
  /casperjs/i,
  /nightmare/i,

  // Security scanners
  /nikto/i,
  /nmap/i,
  /sqlmap/i,
  /masscan/i,
  /zgrab/i,
  /nessus/i,
  /burpsuite/i,
  /acunetix/i,
  /openvas/i,

  // Monitoring & uptime tools
  /uptimerobot/i,
  /pingdom/i,
  /statuscake/i,
  /site24x7/i,
  /newrelic/i,
  /datadog/i,
  /nagios/i,
  /zabbix/i,

  // Generic bot patterns
  /bot\b/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /fetcher/i,
  /curl\//i,
  /wget\//i,
  /python-requests/i,
  /python-urllib/i,
  /java\//i,
  /go-http-client/i,
  /ruby/i,
  /perl/i,
  /libwww/i,
  /lwp-trivial/i,
  /mechanize/i,
  /httpclient/i,
  /okhttp/i,
  /axios/i,
  /node-fetch/i,
  /got\//i,
  /superagent/i,
  /request\//i,
];

function isBot(req: Request): boolean {
  const ua = req.headers["user-agent"] || "";

  // Block empty user agents
  if (!ua || ua.trim() === "") return true;

  // Block known bot patterns
  for (const pattern of BOT_PATTERNS) {
    if (pattern.test(ua)) return true;
  }

  // Block if no Accept-Language header (bots often skip this)
  const acceptLang = req.headers["accept-language"];
  if (!acceptLang) return true;

  // Block if no Accept header
  const accept = req.headers["accept"];
  if (!accept) return true;

  // Block if it looks like a raw HTTP client (no browser-like headers)
  const hasSecFetch = req.headers["sec-fetch-dest"] !== undefined ||
                      req.headers["sec-ch-ua"] !== undefined;
  const hasRefererOrOrigin = req.headers["referer"] || req.headers["origin"];

  // Very basic browser fingerprint check: real browsers send sec-fetch headers or have typical accept headers
  const browserAccept = accept.includes("text/html");
  if (!browserAccept) return true;

  return false;
}

const PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
  <meta name="googlebot" content="noindex, nofollow" />
  <title>Special Offer</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      width: 100%;
      height: 100%;
      background: #000;
      overflow-x: hidden;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }

    .container {
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }

    .container a {
      display: block;
      width: 100%;
      text-decoration: none;
    }

    .container img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 100%;
      object-fit: contain;
      vertical-align: bottom;
    }

    /* On very wide screens, center and cap width */
    @media (min-width: 481px) {
      body {
        align-items: center;
        min-height: 100vh;
        padding: 20px 0;
      }
      .container {
        box-shadow: 0 0 40px rgba(0,0,0,0.8);
        border-radius: 12px;
        overflow: hidden;
      }
    }

    /* Mobile-first: full screen on small devices */
    @media (max-width: 480px) {
      body {
        align-items: flex-start;
        padding: 0;
      }
      .container {
        max-width: 100%;
        border-radius: 0;
      }
    }
  </style>
  <!-- Block indexing -->
  <meta name="referrer" content="no-referrer" />
</head>
<body>
  <div class="container">
    <a href="https://wa.link/99exch1" target="_blank" rel="noopener noreferrer">
      <img
        src="/red.webp"
        alt="Special Offer"
        loading="eager"
        fetchpriority="high"
        draggable="false"
      />
    </a>
  </div>

  <script>
    // Additional client-side bot detection
    (function() {
      // Check for webdriver (Selenium/Puppeteer)
      if (navigator.webdriver) {
        document.body.innerHTML = '';
        return;
      }

      // Check for headless Chrome
      if (/HeadlessChrome/.test(navigator.userAgent)) {
        document.body.innerHTML = '';
        return;
      }

      // Check for Phantom JS
      if (window._phantom || window.callPhantom) {
        document.body.innerHTML = '';
        return;
      }

      // Check for common automation properties
      if (window.__nightmare || window.domAutomation || window.domAutomationController) {
        document.body.innerHTML = '';
        return;
      }

      // Check screen dimensions - bots often have unusual dimensions
      if (screen.width === 0 || screen.height === 0) {
        document.body.innerHTML = '';
        return;
      }

      // Disable right-click to prevent image saving
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

      // Disable drag
      document.addEventListener('dragstart', function(e) {
        e.preventDefault();
      });
    })();
  </script>
</body>
</html>`;

export function register99Route(app: Express): void {
  // Serve /99.php - hidden from bots, only for real users
  app.get("/99.php", (req: Request, res: Response) => {
    // Bot detection
    if (isBot(req)) {
      // Return 404 to bots - makes the page invisible to crawlers
      return res.status(404).send("Not Found");
    }

    // Set headers to prevent caching and indexing
    res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    return res.status(200).send(PAGE_HTML);
  });

  // Also serve /99 (without .php extension) for convenience
  app.get("/99", (req: Request, res: Response) => {
    if (isBot(req)) {
      return res.status(404).send("Not Found");
    }
    res.redirect(301, "/99.php");
  });
}
