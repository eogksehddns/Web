from flask import Flask, render_template

app = Flask(__name__)

@app.route('/customer_service')
def customer_service():
   return render_template('customer_service.html')

@app.route('/mypage')
def mypage():
   return render_template('mypage.html')

@app.route('/admin_main')
def admin_main():
   return render_template('admin_main.html')

@app.route('/admin_report')
def admin_report():
   return render_template('admin_report.html')

@app.route('/admin_user')
def admin_user():
   return render_template('admin_user.html')

@app.route('/login')
def login():
   return render_template('login.html')

@app.route('/heart_rate')
def heart_rate():
   return render_template('heart_rate.html')

@app.route('/report')
def report():
   return render_template('report.html')

@app.route('/work_management')
def work_management():
   return render_template('work_management.html')

if __name__ == '__main__':  
   app.run('0.0.0.0', port=5000, debug=True)