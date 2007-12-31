function toggleList(listName) {
	toggleElement($(listName + 'ItemList'), $('recentItemList', 'activeItemList', 'openItemList'));
	toggleStyle($(listName + 'ListLink'), $('recentListLink', 'activeListLink', 'openListLink'), 'active');
}