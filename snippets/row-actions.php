<div class="egr-row-actions">
	<div class="egr-add">
		<div class="egr-add-button"<?php echo $data_add; ?>>
			<?php if(count($fieldset_names) > 1) : ?>
				<i class="icon icon-left fa fa-arrow-circle-down"></i><span><?php echo l('fields.structure.add'); ?></span>
			<?php else : ?>
				<i class="icon icon-left fa fa-plus-circle"></i><span><?php echo l('fields.structure.add'); ?></span>
			<?php endif; ?>
			<?php echo egr::snippet('dropdown', array('fieldset_names' => $fieldset_names)); ?>
		</div>
	</div>
</div>