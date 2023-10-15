window.addEventListener('load', function () {
  const anchors = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
  ];
  let currentHash = window.location.hash.substring(1);
  if (anchors.includes(currentHash)) {
    const anchorElement = document.getElementById(currentHash);
    if (anchorElement) {
      const yOffset = -100;
      const y =
        anchorElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  const currentHash2 = window.location.hash.substring(1);
  const section = document.getElementById('price_desktop_section');
  if (section) {
    const targetElement = section.querySelector(`#${currentHash2}`);
    if (targetElement) {
      targetElement.classList.add('active');
      const targetContentId = targetElement.getAttribute('data-target');
      const targetContent = document.getElementById(targetContentId);
      if (targetContent) {
        targetContent.classList.remove('hidden');
      }
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
});
