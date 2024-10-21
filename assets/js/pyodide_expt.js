document.addEventListener('DOMContentLoaded', () => {
    
    const replInput = document.querySelector('#repl');
    const outputTextarea = document.querySelector('#output');

    async function main() {
        const pyodide = await loadPyodide();
        // Pyodide is now ready to use...
        
        replInput.disabled = false;
        replInput.placeholder = "Type your python code here"
        replInput.focus();
        setUpREPL();

        await pyodide.runPython(`
            import sys
            class TextAreaOutput:
                def __init__(self):
                    self.output = ""
                def write(self, text):
                    self.output += text
                def flush(self):
                    pass
            sys.stdout = TextAreaOutput()
            sys.stderr = TextAreaOutput()
        `);

        return pyodide;
    }
    let pyodideReadyPromise = main();
    
    const setUpREPL = () => {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                const code = replInput.value;
                invokePython(code);
            }
        });
    }

    

    const invokePython = async (code) => {
        let pyodide = await pyodideReadyPromise;
        try {
            await pyodide.runPython(code);
        } catch (error) {
            outputTextarea.value = error.message;
        }
        
        const response = await pyodide.runPython('sys.stdout.output + sys.stderr.output');
        outputTextarea.value = response;
        replInput.value = '';
        console.log(response);
    }
});


