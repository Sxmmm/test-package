export enum Colours {
    RED = "#ff1100",
    BLUE = "#0000ff",
}

export class CustomLogs {
    public StandOutLog(value: string): void {
        console.log("%c" + value, "background: #222; color: #bada55");
    }

    public ColouredLog(value: string, colour: Colours): void {
        const decorators = "color: " + colour;
        console.log("%c" + value, decorators);
    }
}
