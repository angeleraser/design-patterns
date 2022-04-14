import { AppLogger } from './utils/Logger';
// import { OOPModuleSectionOne } from './modules/OOP/section-1';
import './style.css';
import { OOPModuleSectionTwo } from './modules/OOP/section-2';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

AppLogger(OOPModuleSectionTwo).execute();
