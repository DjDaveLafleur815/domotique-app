#!/bin/bash

echo "🔧 Génération de l'architecture Nausicaä Standard..."

# ASSETS
mkdir -p assets/icons
mkdir -p assets/images
mkdir -p assets/fonts

# SRC ROOT
mkdir -p src

# API
mkdir -p src/api
touch src/api/client.js
touch src/api/roomsApi.js
touch src/api/authApi.js

# CONFIG
mkdir -p src/config
touch src/config/colors.js
touch src/config/constants.js
touch src/config/theme.js

# CONTROLLERS
mkdir -p src/controllers
touch src/controllers/domoticController.js
touch src/controllers/authController.js

# MODELS
mkdir -p src/models
touch src/models/Room.js
touch src/models/Device.js
touch src/models/User.js

# NAVIGATION
mkdir -p src/navigation
touch src/navigation/AppNavigator.js
touch src/navigation/HomeNavigator.js
touch src/navigation/index.js

# SERVICES
mkdir -p src/services
touch src/services/mqttService.js
touch src/services/haWebsocket.js
touch src/services/ollamaService.js

# STATE
mkdir -p src/state
touch src/state/domoticStore.js

# UTILS
mkdir -p src/utils
touch src/utils/format.js
touch src/utils/helpers.js

# VIEWS
mkdir -p src/views
mkdir -p src/views/screens
touch src/views/screens/HomeScreen.js
touch src/views/screens/RoomScreen.js
touch src/views/screens/LoginScreen.js
touch src/views/screens/SettingsScreen.js

mkdir -p src/views/components
touch src/views/components/RoomCard.js
touch src/views/components/DeviceTile.js
touch src/views/components/Button.js
touch src/views/components/Input.js
touch src/views/components/SectionTitle.js

mkdir -p src/views/layouts
touch src/views/layouts/DefaultLayout.js

mkdir -p src/views/styles
touch src/views/styles/global.js

echo "🎉 Architecture Nausicaä Standard générée avec succès !"
