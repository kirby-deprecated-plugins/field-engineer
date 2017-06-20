<div class="egr-empty">
	<?php _l('fields.structure.empty') ?>
	<span class="egr-add-button"<?php echo $data_add; ?>><?php _l('fields.structure.add.first') ?>
		<?php echo egr::snippet('dropdown', array('fieldset_names' => $fieldset_names)); ?>
	</span>
</div>