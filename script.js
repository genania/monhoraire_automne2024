function showSchedule(weekNumber) {
    // Remplace cette partie par les chemins réels de tes images
    const imagePath = `images/semaine${weekNumber}.png`;

    // Sélectionne l'élément img et change son attribut src pour afficher la bonne image
    const scheduleImage = document.getElementById('scheduleImage');
    scheduleImage.src = imagePath;

    // Affiche l'image (elle est cachée par défaut)
    scheduleImage.style.display = 'block';
  }