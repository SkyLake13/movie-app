import { Component, ErrorInfo, ReactNode } from "react";

const logger = console;

class AppErrorBoundary extends Component<{ children: ReactNode }, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logger.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please refresh the page. 
                For more info about error check console log</h1>;
        }

        return this.props.children;
    }
}

interface State {
    hasError: boolean;
}

export { AppErrorBoundary }