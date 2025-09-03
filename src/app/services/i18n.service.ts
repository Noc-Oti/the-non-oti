import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  constructor(private translate: TranslateService) {
    // Définir la langue par défaut
    const langue = localStorage.getItem('langue') || 'fr';
    this.translate.setDefaultLang('fr');
    this.translate.use(langue);
    // Rendre le service accessible globalement
    (window as any).translateService = this.translate;
  }

  changeLangue(code: string) {
    this.translate.use(code);
    localStorage.setItem('langue', code);
  }
}
