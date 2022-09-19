export function noop(): void {}

export function pipe(...funcs: Function[]): any {
	return function (input?: any): any {
		funcs.reduce((acc: any, func: Function) => func(acc), input);
	};
}
