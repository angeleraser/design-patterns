interface ModuleLoggerConstructor {
	new (): ModuleLogger;
}

interface ModuleLogger {
	execute(): void;
}

class ClassModule {
	constructor(
		private readonly name: string,
		private readonly module: ModuleLoggerConstructor,
	) {}

	printName(prefix: string) {
		console.log(
			`
<==================== ${prefix} of ${this.name} ====================>
`,
		);
	}

	run() {
		new this.module().execute();
	}
}

export { ClassModule };
export type { ModuleLogger, ModuleLoggerConstructor };
