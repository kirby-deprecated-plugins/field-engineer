<?php
$buttons = (empty($buttons)) ? array('delete', 'clone', 'sort-up', 'sort-down', 'sort') : $buttons;
$button_array = array(
	'delete' => array(
		'icon' => 'trash-o'
	),
	'clone' => array(
		'icon' => 'clone'
	),
	'sort-up' => array(
		'icon' => 'long-arrow-up'
	),
	'sort-down' => array(
		'icon' => 'long-arrow-down'
	),
	'sort' => array(
		'icon' => 'arrows'
	)
);
?>

<div class="egr-actions">
	<?php foreach($buttons as $key) : ?>
		<?php if(isset($button_array[$key]['icon'])) : ?>
			<div class="egr-<?php echo $key; ?>">
				<i class="icon fa fa-<?php echo $button_array[$key]['icon']; ?>"></i>
			</div>
		<?php endif; ?>
	<?php endforeach; ?>
</div>