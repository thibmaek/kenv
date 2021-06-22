// Menu: Material Design Icons (mdi)
// Description: Search for an icon on the mdi registry
const mdi = await npm('@mdi/js');
const decamelize = await npm('decamelize')

const normalizeId = (id) => decamelize(id.replace(/^mdi/, ''), {separator: '-'});

function getIconsForQuery(query) {
  const icons = Object.entries(mdi)
    .filter(([id]) => id.replace(/^mdi/, '').toLowerCase().includes(query.replace(' ', '')));
  return icons.length > 0 ? icons.map(([id, path]) => ({ id, path })) : null;
}

async function showPanel() {
  const icon = await arg("Search for icon:", async input => {
    if (input.length < 3) return ``;

    const icons = getIconsForQuery(input);

    if (!Array.isArray(icons)) return 'No icons found';

    const choices = icons.map(({ id, path }) => {
      const mdiID = normalizeId(id);

      return {
        name: mdiID,
        value: mdiID,
        html: `
        <div class="flex flex-row h-10 w-full justify-start items-center">
          <div class="text-base font-bold font-sans mr-8">${mdiID}</div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="${path}" />
          </svg>
        </div>`,
      }
    })

    return choices;
  });

  copy(icon);
}

showPanel();
