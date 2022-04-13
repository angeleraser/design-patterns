interface ModuleLoggerConstructor {
	new (): ModuleLogger;
}

interface ModuleLogger {
	execute(): void;
}

const AppLogger = (Module: ModuleLoggerConstructor) => {
	return new Module();
};

export { AppLogger };
export type { ModuleLogger, ModuleLoggerConstructor };
