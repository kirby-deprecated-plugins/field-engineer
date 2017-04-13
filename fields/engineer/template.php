<div class="engineer">
<?php if(isset($engineer_field['fields'])) : ?>
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
				<tr class="engineer-hidden-row<?= e(!c::get('field.engineer.debug', false), ' hidden'); ?>">
					<?php $i = null; $rows = null; ?>
					<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
						<td data-type="<?= $subfield['type']; ?>" data-name="<?= $key; ?>">
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
					<tr data-engineer-row="<?= $i; ?>">
						<?php foreach($engineer_field['fields'] as $key => $subfield) : ?>
							<td data-type="<?= $subfield['type']; ?>" data-name="<?= $key; ?>">
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
</div>