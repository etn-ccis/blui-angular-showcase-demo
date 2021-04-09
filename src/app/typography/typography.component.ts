import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-typography',
    template: `
        <div style="padding: 24px">
            <div #matDisplay4 class="mat-display-4">
                mat-display-4 |
                {{ getFontSize(matDisplay4) }} |
                {{ getFontWeight(matDisplay4) }}
            </div>
            <div #matDisplay3 class="mat-display-3">
                mat-display-3 |
                {{ getFontSize(matDisplay3) }} |
                {{ getFontWeight(matDisplay3) }}
            </div>
            <div #matDisplay2 class="mat-display-2">
                mat-display-2 |
                {{ getFontSize(matDisplay2) }} |
                {{ getFontWeight(matDisplay2) }}
            </div>
            <div #matDisplay1 class="mat-display-1">
                mat-display-1 |
                {{ getFontSize(matDisplay1) }} |
                {{ getFontWeight(matDisplay1) }}
            </div>
            <!-- headline -->
            <div #matH1 class="mat-h1">
                mat-h1 |
                {{ getFontSize(matH1) }} |
                {{ getFontWeight(matH1) }}
            </div>
            <div #matHeadline class="mat-headline">
                mat-headline |
                {{ getFontSize(matHeadline) }} |
                {{ getFontWeight(matHeadline) }}
            </div>
            <!-- title -->
            <div #matH2 class="mat-h2">
                mat-h2 |
                {{ getFontSize(matH2) }} |
                {{ getFontWeight(matH2) }}
            </div>
            <div #matTitle class="mat-title">
                mat-title |
                {{ getFontSize(matTitle) }} |
                {{ getFontWeight(matTitle) }}
            </div>
            <!-- Subheading-2 -->
            <div #matH3 class="mat-h3">
                mat-h3 |
                {{ getFontSize(matH3) }} |
                {{ getFontWeight(matH3) }}
            </div>
            <div #matSubheading2 class="mat-subheading-2">
                mat-subheading-2 |
                {{ getFontSize(matSubheading2) }} |
                {{ getFontWeight(matSubheading2) }}
            </div>
            <!-- Subheading-1 -->
            <div #matH4 class="mat-h4">
                mat-h4 |
                {{ getFontSize(matH4) }} |
                {{ getFontWeight(matH4) }}
            </div>
            <div #matSubheading1 class="mat-subheading-1">
                mat-subheading-1 |
                {{ getFontSize(matSubheading1) }} |
                {{ getFontWeight(matSubheading1) }}
            </div>
            <!-- body-1 -->
            <div #matBody class="mat-body">
                mat-body |
                {{ getFontSize(matBody) }} |
                {{ getFontWeight(matBody) }}
            </div>
            <div #matBody1 class="mat-body-1">
                mat-body-1 |
                {{ getFontSize(matBody1) }} |
                {{ getFontWeight(matBody1) }}
            </div>
            <!-- body-2 -->
            <div #matBodyStrong class="mat-body-strong">
                mat-body-strong |
                {{ getFontSize(matBodyStrong) }} |
                {{ getFontWeight(matBodyStrong) }}
            </div>
            <div #matBody2 class="mat-body-2">
                mat-body-2 |
                {{ getFontSize(matBody2) }} |
                {{ getFontWeight(matBody2) }}
            </div>
            <!-- caption -->
            <div #matSmall class="mat-small">
                mat-small |
                {{ getFontSize(matSmall) }} |
                {{ getFontWeight(matSmall) }}
            </div>
            <div #matCaption class="mat-caption">
                mat-caption |
                {{ getFontSize(matCaption) }} |
                {{ getFontWeight(matCaption) }}
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
})
export class TypographyComponent {
    getFontSize(el: Element): string {
        return window.getComputedStyle(el).fontSize;
    }

    getFontWeight(el: Element): string {
        return window.getComputedStyle(el).fontWeight;
    }
}
