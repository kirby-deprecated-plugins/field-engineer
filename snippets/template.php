<?php if(c::get('engineer.debug', false)) : ?>
	<style>
		.egr-outline,
		.egr-output {
			display: block;
		}
	</style>
<?php endif; ?>
<div class="egr">
	<div class="egr-outline">
		<?php echo egr::snippet('delete'); ?>
		<?php echo egr::snippet('outline', $args['outline']); ?>
	</div>
	<div class="egr-presentation"><?php echo egr::snippet('presentation', $args['presentation']); ?></div>
	<div class="egr-output">
		<textarea
			name="<?= $args['instance']->name; ?>"
			id="form-field-<?= $args['instance']->name; ?>
		"><?php echo htmlspecialchars($args['instance']->value); ?></textarea>
	</div>
</div>