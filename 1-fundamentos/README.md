# 1. Fundamentos de Formularios en Angular

En este bloque aprenderás los **fundamentos de los formularios en Angular**, desde la captura básica de datos hasta el uso de data binding y la diferencia entre enfoques template-driven y reactivo.  
El objetivo es que comprendas cómo Angular permite crear formularios robustos, interactivos y mantenibles, sentando las bases para validaciones y casos de uso avanzados.

---

## 🎯 Objetivos

- Comprender la importancia de los formularios en aplicaciones web.
- Diferenciar entre formularios template-driven y reactivos.
- Crear formularios básicos y avanzados con ambos enfoques.
- Aplicar validaciones y mostrar mensajes de error.
- Sincronizar datos entre el template y el componente usando data binding.
- Construir casos de uso reales y progresivos.

---

## 📚 Teoría completa y progresiva

### ¿Qué es un formulario en Angular?

Un **formulario** es una estructura que permite a los usuarios ingresar y enviar datos.  
Angular ofrece dos enfoques principales para trabajar con formularios:

- **Template-driven:** Declarativo, ideal para formularios simples y rápidos. Se basa en el uso de directivas como `ngForm` y `ngModel` en el template.
- **Reactivo:** Programático, ideal para formularios complejos y dinámicos. Se basa en clases como `FormGroup`, `FormControl` y `FormBuilder` en el TypeScript del componente.

Ambos enfoques permiten capturar datos, aplicar validaciones y gestionar el estado del formulario.

---

### ¿Por qué son importantes los formularios?

- Permiten la interacción entre el usuario y la aplicación.
- Son el principal medio para recopilar datos, iniciar sesión, registrarse, buscar, filtrar, etc.
- Una buena gestión de formularios mejora la experiencia de usuario y la calidad de los datos.

---

### Data Binding en Formularios

Angular facilita la sincronización de datos entre el template y el componente usando:

- **Interpolación:** `{{ variable }}` – Muestra el valor de una variable en el HTML.
- **Property binding:** `[property]="variable"` – Asigna el valor de una variable a una propiedad del elemento.
- **Event binding:** `(event)="funcion()"` – Ejecuta una función del componente cuando ocurre un evento.
- **Two-way binding:** `[(ngModel)]="variable"` – Sincroniza el valor entre el input y la variable del componente en ambos sentidos.

> **Nota:** Para usar `ngModel` debes importar `FormsModule` en tu módulo.

---

### Diferencias entre Template-driven y Reactivos

| Característica     | Template-driven            | Reactivos                       |
| ------------------ | -------------------------- | ------------------------------- |
| Declaración        | En el template (HTML)      | En el TypeScript (componente)   |
| Ideal para         | Formularios simples        | Formularios complejos/dinámicos |
| Validaciones       | En el template (atributos) | En el código (Validators)       |
| Control del estado | Limitado                   | Completo y programático         |
| Escalabilidad      | Menor                      | Mayor                           |
| Testing            | Más difícil                | Más sencillo                    |
| Ejemplo clave      | `ngForm`, `ngModel`        | `FormGroup`, `FormControl`      |

---

### Ventajas y limitaciones

**Template-driven**

- ✅ Rápido para prototipos y formularios sencillos.
- ✅ Menos código TypeScript.
- ❌ Difícil de escalar y testear en proyectos grandes.
- ❌ Menos control sobre el estado y validaciones complejas.

**Reactivos**

- ✅ Control total sobre el estado y validaciones.
- ✅ Fácil de testear y escalar.
- ✅ Ideal para formularios dinámicos y complejos.
- ❌ Más código y curva de aprendizaje inicial.

---

### Buenas prácticas

- Usa el enfoque template-driven para formularios simples y reactivo para casos complejos.
- Mantén el template limpio y evita lógica compleja en el HTML.
- Aplica validaciones en el template y/o en el componente según el enfoque.
- Usa mensajes de error claros y visibles solo cuando el usuario interactúa con el campo.
- No dupliques lógica de validación en ambos lados.
- Separa la lógica de presentación y validación para facilitar el mantenimiento.

---

### Errores comunes

- Olvidar importar `FormsModule` o `ReactiveFormsModule` en el módulo.
- No asignar el atributo `name` a los inputs en formularios template-driven.
- No inicializar correctamente los controles en formularios reactivos.
- No mostrar mensajes de error solo cuando el campo ha sido tocado o modificado.
- Mezclar lógica de validación en el template y en el componente sin un criterio claro.

---

## Preguntas conceptuales

1. ¿Cuál es la diferencia principal entre un formulario template-driven y uno reactivo?
2. ¿Cómo se enlaza un input con una variable del componente usando ngModel?
3. ¿Qué ventajas ofrece el enfoque reactivo frente al template-driven?
4. ¿Cómo mostrarías un mensaje de error solo cuando el usuario ha interactuado con el campo?
5. ¿Qué tipo de data binding usarías para sincronizar un input y una variable en ambos sentidos?
6. ¿Por qué es importante separar la lógica de validación de la lógica de presentación?

---

## Hints para Formularios

- Usa `ngModel` y `ngForm` para formularios simples y rápidos.
- Usa `FormGroup` y `FormControl` para formularios complejos y dinámicos.
- Aplica validaciones progresivamente y muestra mensajes claros.
- Aprovecha el two-way binding para inputs interactivos.
- Mantén la lógica de validación y presentación separadas para facilitar el mantenimiento.

---

## ✅ Al finalizar este bloque podrás

- Crear formularios desde cero con Angular.
- Elegir el enfoque adecuado (template-driven o reactivo) según el caso.
- Implementar data binding efectivo y seguro.
- Aplicar validaciones básicas y mostrar mensajes claros al usuario.
- Prepararte para abordar validaciones avanzadas, integración con servicios y buenas prácticas en los siguientes bloques.

---

**¡Continúa con el siguiente bloque para dominar validaciones avanzadas y gestión de estado en tus formularios Angular!**
