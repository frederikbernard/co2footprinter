<template>
  <div class="page-container">
    <h2>CO2 Emissionen</h2>
    <h5>Willkommen beim CO2 Footprinter, der ersten App, die auf Landes- und Unternehmensebene aufzeigt, wie viele Emissionen an CO2 verbraucht werden.

    </h5>

    <!-- Filter-Formularfeld -->
    <div class="half-width-filter">
      <q-input filled v-model="filter" label="Filter" @input="applyFilter" />
    </div>

    <!-- Tabelle -->
    <div class="q-pa-md-20">
      <q-table
        flat bordered
        :rows="filteredRows"
        :columns="columns"
        row-key="name"
        :separator="separator"
        hide-bottom
      />
    </div>

    <!-- Gesamtsumme-Anzeige -->
    <div>
      <h4>Gesamtsumme: {{ totalEmissions }} Tonnen</h4>
    </div>
  </div>
</template>


<script>
import { cleanupInput } from '../js/cleanupInput.js';

export default {
  data() {
    return {
      columns: [
        { name: 'land', label: 'Land', align: 'left', field: 'land', sortable: true },
        { name: 'unternehmen', label: 'Unternehmen', align: 'left', field: 'unternehmen', sortable: true },
        { name: 'co2Emission', label: 'CO2-Emission', align: 'right', field: 'co2Emission', sortable: true },
      ],
      rows: [
        { land: 'Deutschland', unternehmen: 'Bayer AG', co2Emission: 150 },
        { land: 'Deutschland', unternehmen: 'BASF AG', co2Emission: 200 },
        { land: 'Frankreich', unternehmen: 'Bayer AG', co2Emission: 180 },
        { land: 'Spanien', unternehmen: 'Telefonica', co2Emission: 220 },
        { land: 'Italien', unternehmen: 'Argo Tractors', co2Emission: 130 }
      ],
      separator: 'horizontal',
      filter: ''
    };
  },
  computed: {
    // Säubere das Filter-Input, bevor es für die Filterung verwendet wird
    filteredRows() {
      const cleanedFilter = cleanupInput(this.filter);
      return this.rows.filter(row =>
        row.land.includes(cleanedFilter) || row.unternehmen.includes(cleanedFilter)
      );
    },
    totalEmissions() {
      return this.filteredRows.reduce((acc, row) => acc + row.co2Emission, 0);
    },
  },
  methods: {
    applyFilter() {
      const cleanedFilter = cleanupInput(this.filter);
      // Hier könnte auch eine weitere Filterlogik stehen, je nach Ihren Anforderungen
      // Zum Beispiel filtern nach genauen Übereinstimmungen etc.
    },
  },
};
</script>



<style>
.page-container {
  padding: 0 20px;
}

.half-width-filter {
  width: 50%; /* Oder eine andere Größe, je nachdem, wie schmal Sie das Filterfeld möchten */
}
</style>



