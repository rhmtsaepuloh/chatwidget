const base_url = 'https://widget-dev.chataja.co.id/';
const backend_url = 'https://widget-be-dev.chataja.co.id/';
// const backend_url = 'https://widget-be.chataja.co.id/';
// const base_url = 'https://widget.chataja.co.id/';
let key = null;

let iconClose = `${base_url}icon/open.svg`;

window.onload = async function () {
  const getDataClient = await dataClient();
  await getUrlEmbed();

  let primaryColor = '#EB5757';
  if (getDataClient) {
    const dataPrimaryColor = getDataClient.themeColor.primaryColor;
    const hexColor = dataPrimaryColor.find(item => (item.isActivate === true))
    if (hexColor) {
      primaryColor = hexColor.hexColor;
    }

    if (getDataClient.iconButton) {
      iconClose = getDataClient.iconButton
    }
  }
  await addButton();
  document.getElementById('chataja-btn').style.backgroundColor = primaryColor;
  document.getElementById('chataja-btn').style.borderColor = primaryColor;
  const linkStylesheets = linkStylesheetsElement();
  linkStylesheets.forEach((cssLink) => {
    document.getElementsByTagName('head')[0].appendChild(cssLink);
  });
};

async function dataClient() {
  const script_tag = document.getElementById('chataja-script');
  const url_string = script_tag.getAttribute("src");
  const url = new URL(url_string);
  key = url.searchParams.get("key");

  const response = await fetch(`${backend_url}api/clientWidget/${key}`, {
    headers: new Headers({
      'appKey': '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db', 
      'appSecret': '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
    })
  });
  var data = await response.json();
  return data;
}

function linkStylesheetsElement() {
  const cssFiles = [`${base_url}styles/button-chat.css`, `${base_url}styles/style.css`];
  const linkStylesheets = cssFiles.map((nameFile) => {
    const link = document.createElement('link');
    link.href = nameFile;
    link.rel = "stylesheet";

    return link;
  });

  return linkStylesheets;
}

function getUrlEmbed() {
  const script_tag = document.getElementById('chataja-script');
  const url_string = script_tag.getAttribute("src");
  const url = new URL(url_string);
  key = url.searchParams.get("key");

  return `${base_url}?key=${key}`;
}

function addButton() {
  const divButton = document.createElement('div');
  divButton.appendChild(createFrameChatPopup());
  divButton.appendChild(wrapperDivButton());

  document.body.appendChild(divButton);
}

function wrapperDivButton() {
  const defaultClassDivButton = "chataja-btn";
  const divButton = document.createElement('div');
  divButton.setAttribute('class', defaultClassDivButton);
  divButton.setAttribute('id', defaultClassDivButton);
  divButton.appendChild(buttonChat());

  return divButton;
}

function buttonChat() {
  const DEFAULT_CLASS = "chataja-logo";
  const DEFAULT_ID = "chataja-img-logo";

  const imgLogoBtn = document.createElement('img');
  imgLogoBtn.setAttribute('src', iconClose);
  imgLogoBtn.setAttribute('class', DEFAULT_CLASS);
  imgLogoBtn.setAttribute('id', DEFAULT_ID);
  imgLogoBtn.onclick = function () {
    openForm();
  };

  return imgLogoBtn;
}

function openForm() {
  document.getElementById('iframe-chataja').className = "frame2";
  document.getElementById('chataja-img-logo').src = `${base_url}icon/close.svg`;

  document.getElementById('chataja-img-logo').onclick = () => {
    closeForm();
  };
}

function closeForm() {
  document.getElementById('iframe-chataja').className = "frame";
  document.getElementById('chataja-img-logo').src = iconClose;
  document.getElementById('chataja-img-logo').onclick = () => {
    openForm();
  };
}

function createFrameChatPopup() {
  const DEFAULT_FRAME_SOURCE = `${base_url}?key=${key}`;

  const frame = document.createElement('iframe')
  frame.title = "No content";
  frame.tabIndex = -1;
  frame.setAttribute('src', DEFAULT_FRAME_SOURCE);
  frame.setAttribute('role', 'presentation');
  frame.setAttribute('id', 'iframe-chataja');
  frame.setAttribute('frameboarder', '0');
  frame.setAttribute('class', 'frame');

  return frame;
}