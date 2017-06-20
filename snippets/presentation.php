<?php $count = (isset($presentation['sets'])) ? count($presentation['sets']) : 0; ?>
<div class="egr-row <?php echo egr::oddEven($presentation['_level'] + 1); ?>" data-field-name="<?php echo $field_name; ?>" data-id="<?php echo $id; ?>" data-count="<?php echo $count; ?>" data-fieldset-count="<?php echo count($presentation['_dropdown']); ?>">
	<?php if(isset($presentation['label'])) : ?>
		<label class="label"><?php echo $presentation['label']; ?></label>
	<?php endif; ?>
	<div class="egr-fieldsets">
		<?php if(isset($presentation['sets'])) : ?>
			<?php foreach($presentation['sets'] as $set_id => $set ) : ?>
				<div class="egr-fieldset" data-fieldset-name="<?php echo $set['name']; ?>">
					<div class="egr-fields"><?php
						echo $instance->presentation()->render(array(
							'instance' => $instance,
							'set' => $set,
							'id' => $id,
						));
					?></div>
					<?php echo egr::snippet('actions'); ?>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>
	
	<?php echo egr::snippet('row-meta', array('fieldset_names' => $presentation['_dropdown'])); ?>
</div>