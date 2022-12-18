from flask import Flask, render_template, url_for  # Import flask library and associated tools

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about-me")
def about_me():
    return render_template("about_me.html")

@app.route("/mini-comics")
def mc():
    return render_template("mc.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/art")
def art():
    return render_template("art.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
