# RIPuppet
Una libreria de Node Js para GUI Ripping en aplicaciones web

# Configuracion

Instale las dependencias correspondientes :

```
npm install

```

En el archivo config.json remplaze los parametros por la url, email y contraseña registrado en su aplicativo Ghost

    "url": "http://localhost:2368/ghost/",
    "headless": true,
    "depthLevels": 4,
    "inputValues": false,
    "values": {"ember8": "j.carvajalm@uniandes.edu.co",
        "ember10": "mfYyHi8q.Mix@r#",
        "passwordTwoInput": "mfYyHi8q.Mix@r#",
        "nameInput": "j.carvajalm@uniandes.edu.co",
        "emailInput": "j.carvajalm@uniandes.edu.co"},
     "browsers": ["chromium", "webkit", "firefox"]


# Ejecucion
Para ejecutar este proyecto :

```
node index.js url headless

```

Ejemplo:

```
node index.js https://github.com true

```
