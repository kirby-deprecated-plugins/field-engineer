<div class="engineer">
	<?php if(isset($engineer_field['fields'])) : ?>
		<div class="engineer-empty structure-empty">
			<?php _l('fields.structure.empty') ?>
			<span class="engineer-add-button-empty"><?php _l('fields.structure.add.first') ?></span>
		</div>
		
		<div class="engineer-data">
			<table class="engineer-table">
				<thead>
					<tr>
						<?php foreach($engineer_field['fields'] as $key => $item) : ?>
							<?php $label = (isset($item['label']) && !empty($item['label'])) ? $item['label'] : '&nbsp;'; ?>
							<th>
								<?= $label; ?>
							</th>
						<?php endforeach; ?>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr class="engineer-row engineer-hidden-row<?= e(!c::get('field.engineer.debug', false), ' hidden'); ?>">
						<td>
							<div class="engineer-sort-handle">
								<i class="icon fa fa-arrows-alt"></i>
							</div>
						</td>
						<?php $i = null; $rows = null; ?>
						<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
							<td class="engineer-field">
								<?= $field->tableRowHidden()->setForm($field, $key, $i, $rows, $subfield); ?>
							</td>
						<?php endforeach; ?>
						<td>
							<div class="engineer-delete-button">
								<i class="icon fa fa-trash-o"></i>
							</div>
						</td>
					</tr>

					<?php $rows = yaml::decode($field->value); ?>
					<?php $i = 0 ; ?>
					<?php foreach($rows as $index => $row) : ?>
						<tr class="engineer-row" data-engineer-row="<?= $i; ?>">
							<td>
								<div class="engineer-sort-handle">
									<i class="icon fa fa-arrows-alt"></i>
								</div>
							</td>
							<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
								<td class="engineer-field" data-type="<?= $subfield['type']; ?>" data-name="<?= $key; ?>">
									<?= $field->tableRow()->setForm($field, $key, $i, $rows, $subfield); ?>
								</td>
							<?php endforeach; ?>
							<td>
								<div class="engineer-delete-button">
									<i class="icon fa fa-trash-o"></i>
								</div>
							</td>
						</tr>
						<?php $i++; ?>
					<?php endforeach; ?>
				</tbody>
			</table>
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