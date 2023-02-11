////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Comandos para instalación de Node.js y configuración de puertos en el servidor Debian de AWS Lightsail //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Agregar repositorio APT de Node.js
/*
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - 
*/

// Instalar Node.js y NPM
/*
    sudo apt-get install -y nodejs 
*/

// Verficar versión de Node.js y de NPM
/*
    node --version
    npm --version
*/

//////////////////////////////////////////////////////////////////////////////////////////
// Comandos para permitir a Node.js ejecutar aplicaciones en puertos inferiores al 1024 //
//////////////////////////////////////////////////////////////////////////////////////////

// Instalación de paquete libcap2
/*
    sudo apt-get install libcap2-bin
*/

// Establecer permisos
/*
    sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
*/