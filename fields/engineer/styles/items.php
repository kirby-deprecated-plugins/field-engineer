<div class="engineer">
	<?php if(isset($engineer_field['fields'])) : ?>
		<div class="engineer-empty structure-empty">
			<?php _l('fields.structure.empty') ?>
			<span class="engineer-add-button-empty"><?php _l('fields.structure.add.first') ?></span>
		</div>

		<div class="engineer-data">
			<div class="engineer-items">
				<div class="engineer-row engineer-hidden-row<?= e(!c::get('field.engineer.debug', false), ' hidden'); ?>">
					<div class="engineer-fields">
						<?php $i = null; $rows = null; ?>
						<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
							<?= $field->itemsRowHidden()->setForm($field, $key, $i, $rows, $subfield); ?>
						<?php endforeach; ?>
					</div>
					<div class="engineer-buttons">
						<div class="engineer-delete-button">
							<i class="icon fa fa-trash-o"></i>
						</div>
						<div class="engineer-sort-handle">
							<i class="icon fa fa-arrows-alt"></i>
						</div>
					</div>
				</div>

				<?php $rows = yaml::decode($field->value); ?>
				<?php $i = 0 ; ?>
				<?php if(!empty($rows)) : ?>
					<?php foreach($rows as $index => $row) : ?>
						<div class="engineer-row" data-engineer-row="<?= $i; ?>">
							<div class="engineer-fields">
								<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
									<?= $field->itemsRow()->setForm($field, $key, $i, $rows, $subfield); ?>
								<?php endforeach; ?>
							</div>
							<div class="engineer-buttons">
								<div class="engineer-delete-button">
									<i class="icon fa fa-trash-o"></i>
								</div>
								<div class="engineer-sort-handle">
									<i class="icon fa fa-arrows-alt"></i>
								</div>
							</div>
						</div>
						<?php $i++; ?>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>

		<textarea
			class="engineer-output<?= e(!c::get('field.engineer.debug', false), ' hidden'); ?>"
			name="<?= $field->name; ?>"
			id="form-field-<?= $field->name; ?>"><?= $field->value; ?></textarea>

	<?php endif; ?>
	
	<div class="engineer-button-wrap">
		<div class="table-add-button">
			<i class="icon icon-left fa fa-plus-circle"></i><?php echo l('fields.structure.add'); ?>
		</div>
	</div>
</div>