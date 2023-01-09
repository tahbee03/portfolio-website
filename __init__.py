from flask import Flask, render_template, url_for  # Imports flask library and associated tools

app = Flask(__name__) # Instantiates Flask app

# Home page
@app.route("/")
def home():
    return render_template("home.html")

# About Me page
@app.route("/about-me")
def about_me():
    return render_template("about_me.html")

# Mini Comics page
@app.route("/mini-comics")
def mc():
    return render_template("mc.html")

# Projects page
@app.route("/projects")
def projects():
    return render_template("projects.html")

# Contact page
@app.route("/contact")
def contact():
    return render_template("contact.html")

# Runs Flask app
if __name__ == "__main__":
    app.run(debug=True)
