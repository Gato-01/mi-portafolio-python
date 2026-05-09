from flask import Flask, render_template

# Crear la aplicación Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = 'mi-clave-secreta-por-cambiar'

# Ruta principal - Página de inicio
@app.route('/')
def inicio():
    return render_template('base.html')

# Ruta de prueba - Verificar que funciona
@app.route('/test')
def test():
    return "¡Flask está funcionando correctamente!"

# Ejecutar la aplicación
if __name__ == '__main__':
    app.run(debug=True)