const contextText = document.getElementById('page-context');
const openPremiumHelpButton = document.getElementById('open-premium-help');
const openStudioButton = document.getElementById('open-studio');

const PREMIUM_HELP_URL =
  'https://support.google.com/youtube/answer/7381437?hl=zh-Hans';
const STUDIO_URL = 'https://studio.youtube.com/';

async function describeCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab || !tab.url) {
    contextText.textContent = '未检测到有效标签页。';
    return;
  }

  const url = new URL(tab.url);
  const host = url.hostname;

  if (host.includes('youtube.com') || host.includes('youtu.be')) {
    contextText.textContent = `当前页面：${host}（可使用下方官方路径）`;
  } else {
    contextText.textContent =
      '当前不在 YouTube 页面。你仍可打开官方帮助或 YouTube Studio。';
  }
}

function bindEvents() {
  openPremiumHelpButton.addEventListener('click', async () => {
    await chrome.tabs.create({ url: PREMIUM_HELP_URL });
  });

  openStudioButton.addEventListener('click', async () => {
    await chrome.tabs.create({ url: STUDIO_URL });
  });
}

bindEvents();
describeCurrentTab();
