import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-bcd13","appId":"1:1023138487299:web:943d1dbf500075c5010236","storageBucket":"simple-crm-bcd13.firebasestorage.app","apiKey":"AIzaSyBNZ_tI3w3f5MdRC6nu4FsXpXBRPHDjPz0","authDomain":"simple-crm-bcd13.firebaseapp.com","messagingSenderId":"1023138487299"})), provideFirestore(() => getFirestore())]
};
