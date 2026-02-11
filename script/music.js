<script>
  const gallery = document.getElementById('gallery');
  const letter = document.getElementById('letter');
  const music = document.getElementById('bg-music');

  document.getElementById('show-letter').addEventListener('click', () => {
    gallery.style.display = 'none';
    letter.style.display = 'block';
  });

  document.getElementById('back-gallery').addEventListener('click', () => {
    letter.style.display = 'none';
    gallery.style.display = 'block';
  });
</script>