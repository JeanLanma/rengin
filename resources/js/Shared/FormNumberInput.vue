<template>
    <input 
      type="text" 
      v-model="displayValue" 
      @blur="isBlurred = true" 
      @focus="isBlurred = false"
    />
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  
  let value = ref('');  // Valor interno
  let isBlurred = ref(false);
  
  let displayValue = computed({
    get: () => {
      if (isBlurred.value) {
        // Cuando el campo de entrada pierde el foco, formatea el número
        return Number(value.value).toFixed(2);
      } else {
        // Cuando el campo de entrada tiene el foco, muestra el valor sin formato
        return value.value;
      }
    },
    set: (newValue) => {
      // Solo acepta números
      const validValue = newValue.replace(/[^\d.]/g, '');
      // Solo permite un punto para los decimales
      const dotIndex = validValue.indexOf('.');
      if (dotIndex >= 0 && validValue.indexOf('.', dotIndex + 1) >= 0) {
        value.value = validValue.slice(0, dotIndex + 1) + validValue.slice(dotIndex + 1).replace(/\./g, '');
      } else {
        value.value = validValue;
      }
    },
  });
  </script>
  