<?php
$count = (isset($presentation['sets'])) ? count($presentation['sets']) : 0;
$buttons = (isset($presentation['buttons'])) ? $presentation['buttons'] : array();
$grid = (isset($presentation['width'])) ? ' egr-grid-item egr-grid-item-' . str_replace('/', '-', $presentation['width']) : '';
$oddeven = egr::oddEven($presentation['_level'] + 1);
?>

<div
	class="egr-row <?php echo $oddeven; ?>"
	data-field-name="<?php echo $field_name; ?>"
	data-id="<?php echo $id; ?>"
	data-count="<?php echo $count; ?>"
	data-fieldset-count="<?php echo count($presentation['_dropdown']); ?>"
>
	<?php if(isset($presentation['label'])) : ?>
		<label class="label"><?php echo $presentation['label']; ?></label>
	<?php endif; ?>	

	<div class="egr-fieldsets<?php echo $grid; ?>">
		<?php if(isset($presentation['sets'])) : ?>
			<?php
				foreach($presentation['sets'] as $set_id => $set ) :
					?><div class="egr-fieldset" data-fieldset-name="<?php echo $set['name']; ?>">
						<div class="egr-fields"><?php
							echo $instance->presentation()->render(array(
								'instance' => $instance,
								'set' => $set,
								'id' => $id,
							));
						?></div>
					<?php echo egr::snippet('actions', array('buttons' => $buttons)); ?>
				</div><?php
			endforeach; endif; ?>
	</div>

	<?php echo egr::snippet('row-meta', array('fieldset_names' => $presentation['_dropdown'])); ?>
</div>