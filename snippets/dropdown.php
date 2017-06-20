<?php if(count($fieldset_names) > 1) : ?>
	<div class="egr-dropdown">
		<?php foreach($fieldset_names as $field_key => $field_label) : ?>
			<div class="egr-add-select" data-add="<?php echo $field_key; ?>"><?php echo $field_label; ?></div>
		<?php endforeach; ?>
	</div>
<?php endif; ?>