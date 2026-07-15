import { Component, Input, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { Source } from '../../services/source-manager/types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../services/theme/theme.service';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
      MatCardModule, MatButtonModule
    ]
})
export class CardComponent {
  @Input() source!: Source;

  private themeService = inject(ThemeService);
  logoFailed = signal(false);

  logo = computed(() => {
    if (this.logoFailed()) return '';
    const mode = this.themeService.resolved();
    return this.source.logos[mode] || this.source.logos.dark;
  });

  color = computed(() => {
    const mode = this.themeService.resolved();
    return this.source.colors[mode] || this.source.colors.dark;
  });

  onLogoError() {
    this.logoFailed.set(true);
  }
}
