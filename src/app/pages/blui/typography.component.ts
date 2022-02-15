import {Component} from "@angular/core";

@Component({
    selector: 'app-blui-typography',
    template: `
        <div style="padding: 16px">
            <div class="title">Display 4 / Headline 1</div>
            <div class="typography-line">
                <div class="mat-display-4">Mat</div>
                <div class="blui-headline-1">Blui</div>
            </div>
            <div class="title">Display 3 / Headline 2</div>
            <div class="typography-line">
                <div class="mat-display-3">Mat</div>
                <div class="blui-headline-2">Blui</div>
            </div>
            <div class="title">Display 2 / Headline 3</div>
            <div class="typography-line">
                <div class="mat-display-2">Mat</div>
                <div class="blui-headline-3">Blui</div>
            </div>
            <div class="title">Display 1 / Headline 4</div>
            <div class="typography-line">
                <div class="mat-display-1">Mat</div>
                <div class="blui-headline-4">Blui</div>
            </div>
            <div class="title">Headline / Headline-5</div>
            <div class="typography-line">
                <div class="mat-headline">Mat</div>
                <div class="blui-headline-5">Blui</div>
            </div>
            <div class="title">Title / Headline 1</div>
            <div class="typography-line">
                <div class="mat-title">Mat</div>
                <div class="blui-headline-6">Blui</div>
            </div>
            <div class="title">Subheading 2 / Subtitle 1</div>
            <div class="typography-line">
                <div class="mat-subheading-2">Mat</div>
                <div class="blui-subtitle-1">Blui</div>
            </div>
            <div class="title">Subheading 1 / Subtitle 2</div>
            <div class="typography-line">
                <div class="mat-subheading-1">Mat</div>
                <div class="blui-subtitle-2">Blui</div>
            </div>
            <div class="title">Body 1 / Body 1</div>
            <div class="typography-line">
                <div class="mat-body-1">Mat</div>
                <div class="blui-body-1">Blui</div>
            </div>
            <div class="title">Body 2 / Body 2</div>
            <div class="typography-line">
                <div class="mat-body-2">Mat</div>
                <div class="blui-body-2">Blui</div>
            </div>
            <div class="title">Subheading2 / Subtitle 2</div>
            <div class="typography-line">
                <div class="mat-subheading-2">Mat</div>
                <div class="blui-subtitle-2">Blui</div>
            </div>
            <div class="title">Caption</div>
            <div class="typography-line">
                <div class="mat-caption">Mat</div>
                <div class="blui-caption">Blui</div>
            </div>
            <div class="title">Button / Button </div>
            <div class="typography-line">
                <div class="mat-button">Mat</div>
                <div class="blui-button">Blui</div>
            </div>
            <div class="title">Input</div>
            <div class="typography-line">
                <div class="mat-input">Mat</div>
            </div>
            <div class="title">Caption</div>
            <div class="typography-line">
                <div class="blui-caption">Blui</div>
            </div>
        </div>
    `,
    styles: [
        `
            .title {
                text-align: center;
                margin-top: 32px;
            }
            .typography-line {
                display: flex;
                justify-content: space-around;
            }
        `
    ]
})
export class BluiTypographyComponent {
}
