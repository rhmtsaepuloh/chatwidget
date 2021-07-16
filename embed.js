const base_url = 'http://localhost:3000/';
let key = null;

window.onload = function () {
  const urlEmbed = getUrlEmbed();
  addButton();
  const linkStylesheets = linkStylesheetsElement();
  linkStylesheets.forEach((cssLink) => {
    document.getElementsByTagName('head')[0].appendChild(cssLink);
  });
};

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
  divButton.appendChild(createButtonClose());

  document.body.appendChild(divButton);
}

function createButtonClose() {
  const divButton = document.createElement('div');
  divButton.setAttribute('class', 'chataja-btn-close');
  divButton.setAttribute('id', 'chataja-btn-close');
  const DEFAULT_LOGO_SOURCE = `${base_url}icon/close-btn.svg`;
  const DEFAULT_CLASS = "chataja-close-logo";
  const DEFAULT_ID = "chataja-img-close-logo";

  const imgLogoBtn = document.createElement('img');
  imgLogoBtn.setAttribute('src', DEFAULT_LOGO_SOURCE);
  imgLogoBtn.setAttribute('class', DEFAULT_CLASS);
  imgLogoBtn.setAttribute('id', DEFAULT_ID);
  imgLogoBtn.setAttribute('onclick', "closeForm()");
  divButton.appendChild(imgLogoBtn);

  return divButton;
}

function wrapperDivButton() {
  const defaultClassDivButton = "chataja-btn";
  const divButton = document.createElement('div');
  divButton.setAttribute('class', defaultClassDivButton);
  divButton.appendChild(buttonChat());

  return divButton;
}

function buttonChat() {

  const DEFAULT_LOGO_SOURCE = `${base_url}icon/open.svg`;
  const DEFAULT_CLASS = "chataja-logo";
  const DEFAULT_ID = "chataja-img-logo";

  const imgLogoBtn = document.createElement('img');
  imgLogoBtn.setAttribute('src', DEFAULT_LOGO_SOURCE);
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
  document.getElementById('chataja-img-logo').classList.add('chataja-close');
  if(window.innerWidth <= 450) {
    document.getElementById('chataja-btn-close').style.display = 'block';
   }

  document.getElementById('chataja-img-logo').onclick = () => {
    closeForm();
  };
}

function closeForm() {
  document.getElementById('iframe-chataja').className = "frame";
  document.getElementById('chataja-img-logo').src = `${base_url}icon/open.svg`;
  document.getElementById('chataja-img-logo').classList.remove('chataja-close');
  document.getElementById('chataja-btn-close').style.display = 'none';
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