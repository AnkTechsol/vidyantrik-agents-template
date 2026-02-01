import gradio as gr

def greet(name):
    return f"Hello {name}! This is the Vidyantrik Agents Template."

demo = gr.Interface(fn=greet, inputs="text", outputs="text")

if __name__ == "__main__":
    demo.launch()
