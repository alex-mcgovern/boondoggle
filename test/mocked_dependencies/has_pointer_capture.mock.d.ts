/**
 * JSDOM doesn't implement PointerEvent so we need to mock our own implementation
 * Default to mouse left click interaction
 * https://github.com/radix-ui/primitives/issues/1822
 * https://github.com/jsdom/jsdom/pull/2666
 */
declare class MockPointerEvent extends Event {
    button: number;
    ctrlKey: boolean;
    pointerType: string;
    constructor(type: string, props: PointerEventInit);
}
