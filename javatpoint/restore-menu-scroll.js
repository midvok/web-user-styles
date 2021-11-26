/*******************************************************************************
 * A script to automatically restore the last scroll position after the page
 * reload for the given element (#menu).
 * - Saves the actual scroll position in the scroll event.
 * - Restores it after the page reload.
 *
 * Install some browser extension (like Code-Injector) to use this script.
 ******************************************************************************/

// Import jquery to make sure it's available
import('https://code.jquery.com/jquery-2.2.4.min.js').then(() => {
  console.log('jQuery is ready!');
  main();
});

function saveMenuPos(event) {
  div = $(event.currentTarget);
  if (div.length) {
    const name = div.attr("id") + ".scrollTop";
    const value = div.scrollTop();
    localStorage.setItem(name, value);
    console.log(`Saved ${name}: ${value}`);
  }
}

function restoreMenuPos(div) {
  const name = div.attr("id") + ".scrollTop";
  const value = localStorage.getItem(name);
  console.log(`Loaded ${name}: ${value}`);
  if (value) div.scrollTop(value);
}

function main() {
  console.log('=== main ===');
  const menu = $("#menu");
  restoreMenuPos(menu);
  menu.scroll(saveMenuPos);
}
