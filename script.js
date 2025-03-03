// Funzione per iniziare il virtual tour
document.getElementById('start-tour').addEventListener('click', () => {
    alert('Benvenuto nel tour! Si prega di avvicinarsi ai beacon per esplorare le sale.');
    startBeaconDetection();
  });
  
  // Funzione per rilevare i beacon BLE
  function startBeaconDetection() {
    if ('bluetooth' in navigator) {
      navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service']  // Aggiungi i servizi che desideri monitorare
      })
      .then(device => {
        console.log('Dispositivo trovato: ' + device.name);
        // Rileva il dispositivo e manda un messaggio o cambia la pagina
        if (device.name.includes('Beacon')) {
          showContentForBeacon(device.name); // Mostra contenuti specifici per il beacon
        }
      })
      .catch(error => {
        console.log('Errore: ' + error);
      });
    } else {
      alert('Web Bluetooth non supportato dal tuo dispositivo.');
    }
  }
  
  // Funzione per mostrare contenuti in base al beacon
  function showContentForBeacon(beaconName) {
    alert('Hai raggiunto la ' + beaconName + '! Visualizza i contenuti correlati.');
    // Qui potresti cambiare la visualizzazione o caricare contenuti aggiuntivi
  }
  