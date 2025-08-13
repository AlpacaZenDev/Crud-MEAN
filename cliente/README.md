# 📦 CRUD MEAN - Cliente Frontend

Aplicación web de gestión de productos desarrollada con Angular 10, parte del stack MEAN (MongoDB, Express.js, Angular, Node.js).

## 🚀 Características del Proyecto

### 🛠️ Stack Tecnológico
- **Frontend:** Angular 10.2.5
- **Framework CSS:** Bootstrap 5.3.3
- **Formularios:** Angular Reactive Forms
- **Notificaciones:** ngx-toastr 12.x
- **Gestión de Estado:** TypeScript 3.9.7
- **Herramientas de Desarrollo:** Angular CLI 10.2.4

### 📋 Funcionalidades
- ✅ **Crear Productos:** Formulario reactivo con validaciones
- ✅ **Listar Productos:** Visualización de productos registrados
- ✅ **Navegación:** Sistema de routing configurado
- ✅ **Notificaciones:** Sistema de alertas y mensajes
- ✅ **Responsive Design:** Compatible con dispositivos móviles

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── crear-producto/          # Componente para crear productos
│   │   └── listar-productos/        # Componente para listar productos
│   ├── services/
│   │   └── producto.service.ts      # Servicio para operaciones CRUD
│   ├── models/
│   │   └── producto.ts              # Modelo de datos del producto
│   ├── app-routing.module.ts        # Configuración de rutas
│   ├── app.component.*              # Componente principal
│   └── app.module.ts                # Módulo principal
├── assets/                          # Recursos estáticos
├── environments/                    # Configuraciones de entorno
└── styles.css                       # Estilos globales
```

## ⚙️ Configuración del Entorno

### Prerequisitos
- Node.js 12.x o superior
- npm 6.x o superior
- Angular CLI 10.x

### 🔧 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd CRUD_MEAN/cliente
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   ng serve
   ```

4. **Acceder a la aplicación:**
   ```
   http://localhost:4200
   ```

## 📦 Dependencias Principales

### Dependencias de Producción
```json
{
  "@angular/animations": "~10.2.5",
  "@angular/common": "~10.2.5",
  "@angular/core": "~10.2.5",
  "@angular/forms": "~10.2.5",
  "@angular/router": "~10.2.5",
  "bootstrap": "^5.3.3",
  "ngx-toastr": "^12.1.0",
  "rxjs": "~6.6.0"
}
```

### Dependencias de Desarrollo
```json
{
  "@angular/cli": "~10.2.4",
  "@angular/compiler-cli": "~10.2.5",
  "typescript": "~3.9.7",
  "@types/minimatch": "^3.0.5"
}
```

## 🛠️ Scripts Disponibles

```bash
# Servidor de desarrollo
npm start
# o
ng serve

# Construcción para producción
npm run build
# o
ng build --prod

# Ejecutar tests
npm test
# o
ng test

# Linting
npm run lint
# o
ng lint

# Tests end-to-end
npm run e2e
# o
ng e2e
```

## 🚨 Problemas Resueltos y Soluciones

### ✅ **RESUELTO: Error de tipos de minimatch**
**Problema:** `Cannot find type definition file for 'minimatch'`

**Causa:** Versión incompatible de @types/minimatch (v6.0.0) con TypeScript 3.9.7

**Solución aplicada:**
```bash
# Cambio en package.json
"@types/minimatch": "^3.0.5"  # En lugar de "^6.0.0"

# Reinstalación
npm uninstall @types/minimatch
npm install @types/minimatch@^3.0.5
```

### ✅ **RESUELTO: Error de binding en formularios**
**Problema:** `Can't bind to 'fromGroup' since it isn't a known property of 'form'`

**Causa:** Error tipográfico en la directiva del formulario

**Solución aplicada:**
```html
<!-- Antes (Incorrecto) -->
<form [fromGroup]="productoForm">

<!-- Después (Correcto) -->
<form [formGroup]="productoForm">
```

### ✅ **RESUELTO: Incompatibilidad de ngx-toastr**
**Problema:** `Module parse failed: Unexpected token` en ngx-toastr

**Causa:** ngx-toastr v19.0.0 incompatible con Angular 10 y TypeScript 3.9.7

**Solución aplicada:**
```bash
# Instalación de versión compatible
npm uninstall ngx-toastr
npm install ngx-toastr@^12.1.0
```

**Configuración en app.module.ts:**
```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
```

## 🎯 Próximos Pasos

- [ ] Conectar con API REST del backend
- [ ] Implementar funcionalidad completa de CRUD
- [ ] Agregar validaciones avanzadas
- [ ] Implementar paginación en listado
- [ ] Agregar filtros de búsqueda
- [ ] Implementar tests unitarios
- [ ] Mejorar UI/UX con más componentes de Bootstrap

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👨‍💻 Desarrollador

**AlpacaZenDev**
- GitHub: [@AlpacaZenDev](https://github.com/AlpacaZenDev)

---

**Estado del Proyecto:** ✅ Configuración completa y problemas resueltos - Listo para desarrollo

*Última actualización: Agosto 13, 2025*
