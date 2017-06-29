<?php if(!empty($outline)) : ?>
	<?php foreach($outline as $row_name => $set ) : ?>
		<?php $fieldset_names = array(); ?>
		<div class="egr-row egr-row-blueprint <?php echo egr::oddEven($set['_level'] + 1); ?>"
			data-field-name="<?php echo $row_name; ?>"
			data-id="<?php echo $row_name; ?>"
			data-fieldset-count="<?php echo count($set['fieldsets']); ?>"
		>
			<div class="egr-fieldsets">
				<?php foreach($set['fieldsets'] as $fieldset_name => $fieldset ) : ?>
					<?php $fieldset_names[$fieldset_name] = (isset($fieldset['label'])) ? $fieldset['label'] : $fieldset_name; ?>
					<div class="egr-fieldset" data-fieldset-name="<?php echo $fieldset_name; ?>">
						<div class="egr-fields"><?php
							if(!empty($fieldset['fields'])) {
								foreach($fieldset['fields'] as $field_name => $field) {
									if($field['type'] != 'engineer') {
										echo $instance->setField()->data($field_name, $field, $instance->page);
									}
								}
							}
							?>
							<?php if(isset($fieldset['_dropdown'])) : ?>
								<?php foreach($fieldset['_dropdown'] as $key => $dropdown ) : ?>
									<div class="egr-row <?php echo egr::oddEven($set['_level']); ?>"
										data-field-name="<?php echo $key; ?>"
										data-id="<?php echo $row_name; ?>,<?php echo $key; ?>"
										data-count="0"
									>
										<?php if(isset($dropdown['label'])) : ?>
											<label class="label"><?php echo $dropdown['label']; ?></label>
										<?php endif; ?>
										<div class="egr-fieldsets"></div>
										<?php echo egr::snippet('row-meta', array('fieldset_names' => $dropdown['sets'])); ?>
									</div>
								<?php endforeach; ?>
							<?php endif; ?>
						</div>

						<?php
						$buttons = (isset($set['buttons'])) ? $set['buttons'] : array();
						echo egr::snippet('actions', array('buttons' => $buttons));
						?>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	<?php endforeach; ?>
<?php endif; ?>