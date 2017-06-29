<div class="egr-empty">
	<?php $icon = (!empty($data_add)) ? 'plus-circle' : 'arrow-circle-down'; ?>
	<i class="icon icon-left fa fa-<?php echo $icon; ?>"></i>
	<span class="egr-add-button"<?php echo $data_add; ?>><?php _l('fields.structure.add.first') ?>
		<?php echo egr::snippet('dropdown', array('fieldset_names' => $fieldset_names)); ?>
	</span>
</div>