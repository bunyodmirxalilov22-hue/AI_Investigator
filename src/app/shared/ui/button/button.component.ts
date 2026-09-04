import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get classes(): string {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

    const sizes: Record<ButtonSize, string> = {
      sm: 'h-8 px-3 text-[13px]',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-[15px]',
    };

    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-ink-950 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 shadow-card',
      secondary:
        'bg-accent-500 text-white hover:bg-accent-600 shadow-card',
      outline:
        'border border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--surface-2)]',
      ghost:
        'text-[var(--text-primary)] hover:bg-[var(--surface-2)]',
      danger:
        'bg-danger-500 text-white hover:bg-danger-700',
    };

    return `${base} ${sizes[this.size]} ${variants[this.variant]} ${this.fullWidth ? 'w-full' : ''}`;
  }
}
