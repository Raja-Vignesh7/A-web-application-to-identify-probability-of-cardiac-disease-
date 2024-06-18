'''# from flask import Flask, render_template, request,jsonify
# from main import Model

# app = Flask(__name__,template_folder='pages',static_folder='static')

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/get_probab', method=['POST'])
# def perdict_probability():
#     # data = request.get_json()
#     # array = data.get('array')
#     # predicate = Model.predict(array)
    
#     # return jsonify({'predicate':predicate})
#     try:
#         data = request.get_jason()
#         if not data:
#             return jsonify({'error': 'No input data provided'}), 400

#         array = data.get('array')
#         if not array:
#             return jsonify({'error': 'Array not provided'}), 400

#         predicate = Model.predict(array)
#         return jsonify({'predicate': predicate})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main':
#     app.run(port=3000,debug=True)'''
from flask import Flask, render_template, request, jsonify
from main import Model

app = Flask(__name__, template_folder='pages', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_probab', methods=['POST'])
def predict_probability():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No input data provided'}), 400

        array = data.get('array')
        if not array:
            return jsonify({'error': 'Array not provided'}), 400

        predicate = Model.predict(array)
        return jsonify({'predicate': predicate})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000,debug=True)
